/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { showNotification } from "@api/Notifications";
import { MeloncordDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "Debug Information",
    authors: [MeloncordDevs.jay],
    description: "Logs load time and other information via notifications",
    patches: [],
    start() {
        const startTime = Date.now();



        setTimeout(() => {
            const loadTime = Date.now() - startTime;
            showNotification({
                title: "Debug Information",
                body: `Load Time: ${loadTime} ms`,
                permanent: false
            });
        }, 0);


        // showNotification({
        //     title: "Debug Information",
        //     body: `Active Guild ID: ${SelectedGuildStore.getGuildId()}\nActive Channel ID: ${SelectedChannelStore.getChannelId()}`,
        //     permanent: false
        // });
    },

    stop() {
        showNotification({
            title: "Debug Information",
            body: "LoggerPlugin has been stopped.",
            permanent: false
        });
    }
});

