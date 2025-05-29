
import os
import sys
import argparse
from dotenv import load_dotenv

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from logger import detection_logger as logger

def parse_arguments():
    """Parse command line arguments"""
    parser = argparse.ArgumentParser(description='Weapon Detection System')
    parser.add_argument('--config', '-c', 
                        help='Path to .env configuration file', 
                        default='.env')
    parser.add_argument('--model', '-m',
                        help='Path to YOLO model file',
                        default=None)
    parser.add_argument('--cameras', 
                        help='Comma-separated list of camera URLs (overrides .env)',
                        default=None)
    parser.add_argument('--api-endpoint',
                        help='API endpoint URL (overrides .env)',
                        default=None)
    parser.add_argument('--verbose', '-v', 
                        action='store_true',
                        help='Enable verbose logging')
    return parser.parse_args()

def main():
    """Main entry point for the weapon detection system"""
    args = parse_arguments()
    
    # Load configuration from specified .env file
    if os.path.exists(args.config):
        logger.info(f"Loading configuration from {args.config}")
        load_dotenv(args.config)
    else:
        logger.warning(f"Configuration file {args.config} not found, using default settings")
        load_dotenv()
    
    # Override settings with command line arguments if provided
    if args.model:
        os.environ['MODEL_PATH'] = args.model
        logger.info(f"Using model from command line: {args.model}")
    
    if args.cameras:
        os.environ['CAMERA_URLS'] = args.cameras
        logger.info(f"Using cameras from command line: {args.cameras}")
    
    if args.api_endpoint:
        os.environ['API_ENDPOINT'] = args.api_endpoint
        logger.info(f"Using API endpoint from command line: {args.api_endpoint}")
    
    # Set verbose logging if requested
    if args.verbose:
        import logging
        for handler in logger.logger.handlers:
            handler.setLevel(logging.DEBUG)
        logger.logger.setLevel(logging.DEBUG)
        logger.debug("Verbose logging enabled")
    
    # Check for required environment variables
    required_vars = ['MODEL_PATH', 'CAMERA_URLS', 'API_ENDPOINT']
    missing_vars = [var for var in required_vars if not os.getenv(var)]
    
    if missing_vars:
        logger.error(f"Missing required environment variables: {', '.join(missing_vars)}")
        logger.error("Please check your .env file or provide them as command line arguments")
        sys.exit(1)
    
    # Validate model path
    model_path = os.getenv('MODEL_PATH')
    if not os.path.exists(model_path):
        logger.error(f"Model not found at {model_path}")
        logger.error("Please download or specify the correct model path")
        sys.exit(1)
    
    # Import and run the detection system
    try:
        from weapon_detection import main as run_detection
        logger.info("Starting weapon detection system...")
        run_detection()
    except KeyboardInterrupt:
        logger.info("Detection system stopped by user")
    except Exception as e:
        logger.error(f"Error running detection system: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()