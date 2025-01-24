import { GetCatalogOptions, ProductCreate, ProductUpdate, SocketConfig } from '../Types';
import { BinaryNode } from '../WABinary';
export declare const makeBusinessSocket: (config: SocketConfig) => {
    logger: Logger;
    getOrderDetails: (orderId: string, tokenBase64: string) => Promise<import("..").OrderDetails>;
    getCatalog: ({ jid, limit, cursor }: GetCatalogOptions) => Promise<{
        products: import("..").Product[];
        nextPageCursor: any;
    }>;
    getCollections: (jid?: string, limit?: number) => Promise<{
        collections: import("..").CatalogCollection[];
    }>;
    productCreate: (create: ProductCreate) => Promise<import("..").Product>;
    productDelete: (productIds: string[]) => Promise<{
        deleted: number;
    }>;
    productUpdate: (productId: string, update: ProductUpdate) => Promise<import("..").Product>;
    sendMessageAck: ({ tag, attrs, content }: BinaryNode) => Promise<void>;
    sendRetryRequest: (node: BinaryNode, forceIncludeKeys?: boolean) => Promise<void>;
    offerCall: (toJid: string, isVideo?: boolean) => Promise<{
        id: any;
        to: string;
    }>;
    rejectCall: (callId: string, callFrom: string) => Promise<void>;
    getPrivacyTokens: (jids: string[]) => Promise<BinaryNode>;
    assertSessions: (jids: string[], force: boolean) => Promise<boolean>;
    relayMessage: (jid: string, message: import("..").proto.IMessage, { messageId: msgId, participant, additionalAttributes, additionalNodes, useUserDevicesCache, cachedGroupMetadata, statusJidList }: import("..").MessageRelayOptions) => Promise<string>;
    sendReceipt: (jid: string, participant: string | undefined, messageIds: string[], type: import("..").MessageReceiptType) => Promise<void>;
    sendReceipts: (keys: import("..").WAMessageKey[], type: import("..").MessageReceiptType) => Promise<void>;
    getButtonArgs: (message: import("..").proto.IMessage) => BinaryNode["attrs"];
    readMessages: (keys: import("..").WAMessageKey[]) => Promise<void>;
    refreshMediaConn: (forceGet?: boolean) => Promise<import("..").MediaConnInfo>;
    getUSyncDevices: (jids: string[], useCache: boolean, ignoreZeroDevices: boolean) => Promise<import("..").JidWithDevice[]>;
    createParticipantNodes: (jids: string[], message: import("..").proto.IMessage, extraAttrs?: BinaryNode["attrs"]) => Promise<{
        nodes: BinaryNode[];
        shouldIncludeDeviceIdentity: boolean;
    }>;
    waUploadToServer: import("..").WAMediaUploadFunction;
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
    updateMediaMessage: (message: import("..").proto.IWebMessageInfo) => Promise<import("..").proto.IWebMessageInfo>;
    sendMessage: (jid: string, content: import("..").AnyMessageContent, options?: import("..").MiscMessageGenerationOptions) => Promise<import("..").proto.WebMessageInfo | undefined>;
    subscribeNewsletterUpdates: (jid: string) => Promise<{
        duration: string;
    }>;
    newsletterReactionMode: (jid: string, mode: import("..").NewsletterReactionMode) => Promise<void>;
    newsletterUpdateDescription: (jid: string, description?: string) => Promise<void>;
    newsletterUpdateName: (jid: string, name: string) => Promise<void>;
    newsletterUpdatePicture: (jid: string, content: import("..").WAMediaUpload) => Promise<void>;
    newsletterRemovePicture: (jid: string) => Promise<void>;
    newsletterUnfollow: (jid: string) => Promise<void>;
    newsletterFollow: (jid: string) => Promise<void>;
    newsletterUnmute: (jid: string) => Promise<void>;
    newsletterMute: (jid: string) => Promise<void>;
    newsletterAction: (jid: string, type: "follow" | "unfollow" | "mute" | "unmute") => Promise<void>;
    newsletterCreate: (name: string, description: string, reaction_codes: string) => Promise<import("..").NewsletterMetadata>;
    newsletterMetadata: (type: "invite" | "jid", key: string, role?: import("..").NewsletterViewRole) => Promise<import("..").NewsletterMetadata>;
    newsletterAdminCount: (jid: string) => Promise<number>;
    newsletterChangeOwner: (jid: string, user: string) => Promise<void>;
    newsletterDemote: (jid: string, user: string) => Promise<void>;
    newsletterDelete: (jid: string) => Promise<void>;
    newsletterReactMessage: (jid: string, serverId: string, code?: string) => Promise<void>;
    newsletterFetchMessages: (type: "invite" | "jid", key: string, count: number, after?: number) => Promise<import("..").NewsletterFetchedUpdate[]>;
    newsletterFetchUpdates: (jid: string, count: number, after?: number, since?: number) => Promise<import("..").NewsletterFetchedUpdate[]>;
    groupMetadata: (jid: string) => Promise<import("..").GroupMetadata>;
    groupCreate: (subject: string, participants: string[]) => Promise<import("..").GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupRequestParticipantsList: (jid: string) => Promise<{
        [key: string]: string;
    }[]>;
    groupRequestParticipantsUpdate: (jid: string, participants: string[], action: "approve" | "reject") => Promise<{
        status: string;
        jid: string;
    }[]>;
    groupParticipantsUpdate: (jid: string, participants: string[], action: import("..").ParticipantAction) => Promise<{
        status: string;
        jid: string;
        content: BinaryNode;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string | undefined>;
    groupRevokeInvite: (jid: string) => Promise<string | undefined>;
    groupAcceptInvite: (code: string) => Promise<string | undefined>;
    groupAcceptInviteV4: (key: string | import("..").proto.IMessageKey, inviteMessage: import("..").proto.Message.IGroupInviteMessage) => Promise<string>;
    groupGetInviteInfo: (code: string) => Promise<import("..").GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: "announcement" | "not_announcement" | "locked" | "unlocked") => Promise<void>;
    groupMemberAddMode: (jid: string, mode: "admin_add" | "all_member_add") => Promise<void>;
    groupJoinApprovalMode: (jid: string, mode: "on" | "off") => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: import("..").GroupMetadata;
    }>;
    processingMutex: {
        mutex<T>(code: () => Promise<T> | T): Promise<T>;
    };
    upsertMessage: (msg: import("..").proto.IWebMessageInfo, type: import("..").MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: import("..").WAPatchCreate) => Promise<void>;
    sendPresenceUpdate: (type: import("..").WAPresence, toJid?: string) => Promise<void>;
    presenceSubscribe: (toJid: string, tcToken?: Buffer) => Promise<void>;
    profilePictureUrl: (jid: string, type?: "preview" | "image", timeoutMs?: number) => Promise<string | undefined>;
    onWhatsApp: (...jids: string[]) => Promise<{
        exists: boolean;
        jid: string;
    }[]>;
    fetchBlocklist: () => Promise<string[]>;
    fetchStatus: (jid: string) => Promise<{
        status: string | undefined;
        setAt: Date;
    } | undefined>;
    updateProfilePicture: (jid: string, content: import("..").WAMediaUpload) => Promise<void>;
    removeProfilePicture: (jid: string) => Promise<void>;
    updateProfileStatus: (status: string) => Promise<void>;
    updateProfileName: (name: string) => Promise<void>;
    updateBlockStatus: (jid: string, action: "block" | "unblock") => Promise<void>;
    updateLastSeenPrivacy: (value: import("..").WAPrivacyValue) => Promise<void>;
    updateOnlinePrivacy: (value: import("..").WAPrivacyOnlineValue) => Promise<void>;
    updateProfilePicturePrivacy: (value: import("..").WAPrivacyValue) => Promise<void>;
    updateStatusPrivacy: (value: import("..").WAPrivacyValue) => Promise<void>;
    updateReadReceiptsPrivacy: (value: import("..").WAReadReceiptsValue) => Promise<void>;
    updateGroupsAddPrivacy: (value: import("..").WAPrivacyValue) => Promise<void>;
    updateDefaultDisappearingMode: (duration: number) => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<import("..").WABusinessProfile | void>;
    resyncAppState: (collections: readonly ("critical_block" | "critical_unblock_low" | "regular_high" | "regular_low" | "regular")[], isInitialSync: boolean) => Promise<void>;
    chatModify: (mod: import("..").ChatModification, jid: string) => Promise<void>;
    cleanDirtyBits: (type: "account_sync" | "groups", fromTimestamp?: number | string) => Promise<void>;
    addChatLabel: (jid: string, labelId: string) => Promise<void>;
    removeChatLabel: (jid: string, labelId: string) => Promise<void>;
    addMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    removeMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    star: (jid: string, messages: {
        id: string;
        fromMe?: boolean;
    }[], star: boolean) => Promise<void>;
    type: "md";
    ws: any;
    ev: import("..").BaileysEventEmitter & {
        process(handler: (events: Partial<import("..").BaileysEventMap>) => void | Promise<void>): (() => void);
        buffer(): void;
        createBufferedFunction<A extends any[], T>(work: (...args: A) => Promise<T>): ((...args: A) => Promise<T>);
        flush(force?: boolean): boolean;
        isBuffering(): boolean;
    };
    authState: {
        creds: import("..").AuthenticationCreds;
        keys: import("..").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("..").SignalRepository;
    user: import("..").Contact | undefined;
    generateMessageTag: () => string;
    query: (node: BinaryNode, timeoutMs?: number) => Promise<BinaryNode>;
    waitForMessage: <T>(msgId: string, timeoutMs?: number | undefined) => Promise<T>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: BinaryNode) => Promise<void>;
    logout: (msg?: string) => Promise<void>;
    end: (error: Error | undefined) => void;
    onUnexpectedError: (err: Error | Boom, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    requestPairingCode: (phoneNumber: string) => Promise<string>;
    waitForConnectionUpdate: (check: (u: Partial<import("..").ConnectionState>) => boolean | undefined, timeoutMs?: number) => Promise<void>;
    sendWAMBuffer: (wamBuffer: Buffer) => Promise<BinaryNode>;
};
