const Pusher = require('pusher');
const { logger } = require('./logger.config');

class PusherConfig {
    #pusher;
    static #instance;

    constructor() {
        this.#pusher = new Pusher({
            appId: process.env.PUSHER_APP_ID,
            key: process.env.PUSHER_KEY,
            secret: process.env.PUSHER_SECRET,
            cluster: process.env.PUSHER_CLUSTER,
            useTLS: true
        });

        logger.info('Pusher initialized');
    }

    static getInstance() {
        if (!PusherConfig.#instance) {
            PusherConfig.#instance = new PusherConfig();
        }
        return PusherConfig.#instance;
    }

    async notify(channel, event, data) {
        try {
            await this.#pusher.trigger(channel, event, data);
            logger.info(`Notification sent to channel: ${channel}, event: ${event}`);
        } catch (error) {
            logger.error('Error sending notification:', error);
            throw error;
        }
    }

    async notifyOwner(ownerId, event, data) {
        return this.notify(`owner-${ownerId}`, event, data);
    }

    async notifyPolice(policeId, event, data) {
        return this.notify(`police-${policeId}`, event, data);
    }

    async notifyDetection(cctvId, data) {
        return this.notify(`detection-${cctvId}`, 'weapon-detected', data);
    }
}

module.exports = {
    pusher: PusherConfig.getInstance()
}; 