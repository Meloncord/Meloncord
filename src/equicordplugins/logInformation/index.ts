/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { showNotification } from "@api/Notifications";
import { MeloncordDevs } from "@utils/constants";
import { tryOrElse } from "@utils/misc";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "Debug Information",
    authors: [MeloncordDevs.jay, MeloncordDevs.okfusi],
    description: "Logs load time, last crash reason, and other information via notifications",
    patches: [],
    async start() {
        const startTime = Date.now();

        setTimeout(() => {
            const loadTime = Date.now() - startTime;
            showNotification({
                title: "Debug Information",
                body: `Load Time: ${loadTime} ms`,
                permanent: false
            });
        }, 0);

        const lastCrashReason = (await tryOrElse(() => DiscordNative.processUtils.getLastCrash(), undefined))?.rendererCrashReason ?? "N/A Or No Recent Crash";
        showNotification({
            title: "Debug Information",
            body: `Last Crash Reason: ${lastCrashReason}`,
            permanent: false
        });
    },

    stop() {
        showNotification({
            title: "Debug Information",
            body: "LoggerPlugin has been stopped.",
            permanent: false
        });
    }
});
