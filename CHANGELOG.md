## [1.1.1](https://github.com/famasya/whatsapp-business-sdk/compare/v1.1.0...v1.1.1) (2025-07-05)


### Bug Fixes

* security update ([ec6ad94](https://github.com/famasya/whatsapp-business-sdk/commit/ec6ad943659a62d5045302003a489486fda894c3))

# [1.1.0](https://github.com/famasya/whatsapp-business-sdk/compare/v1.0.0...v1.1.0) (2025-07-05)


### Features

* export webhook type ([0d69bdb](https://github.com/famasya/whatsapp-business-sdk/commit/0d69bdb458af1bf8b11a4836f5f575e2b4f2566f))

# 1.0.0 (2025-07-05)


### Bug Fixes

* 🐛 endpoints and typos ([fd9b9f0](https://github.com/famasya/whatsapp-business-sdk/commit/fd9b9f080c60e6e5246e26fb8b5cc50036cc3001))
* 🐛 imports paths ([57b0194](https://github.com/famasya/whatsapp-business-sdk/commit/57b01949f8f7e99c10ff445096afc4965a2afcbf))
* 🐛 interactive message optional fields ([de9662d](https://github.com/famasya/whatsapp-business-sdk/commit/de9662d4a4709b53174022af5fbd425cb1b6b47a)), closes [#30](https://github.com/famasya/whatsapp-business-sdk/issues/30)
* 🐛 message.ts ([eed637c](https://github.com/famasya/whatsapp-business-sdk/commit/eed637c5d294447fa235d7f5e6051301f5c5e03e)), closes [#32](https://github.com/famasya/whatsapp-business-sdk/issues/32)
* 🐛 undefined fields in webhookHandler ([59ddcbb](https://github.com/famasya/whatsapp-business-sdk/commit/59ddcbb7aa4aa39f8af8b0bc2e9c1444dc6d99f7))
* 🐛 update identity check endpoint ([40bdd2b](https://github.com/famasya/whatsapp-business-sdk/commit/40bdd2b3885899bda677bc9f3a117644469975f1))
* 🐛 wABA error handler default message ([af3d4ef](https://github.com/famasya/whatsapp-business-sdk/commit/af3d4eff95821a5ec7db0a3659507ff3064d4e68))
* 🐛 wABAClient error handler and endpoints ([e1d457a](https://github.com/famasya/whatsapp-business-sdk/commit/e1d457a900e2b091cd533a4991a5015322e14305))
* 🐛 wABAErrorHandler ([f531d38](https://github.com/famasya/whatsapp-business-sdk/commit/f531d38d8caebe091f0b7e405e33027655c0f673))
* 🐛 webhook timestamp type ([bc6f579](https://github.com/famasya/whatsapp-business-sdk/commit/bc6f57908bfdf011fcbbf58e176d393d5edf2b71))
* Comments and duplicate variable ([c47f2f1](https://github.com/famasya/whatsapp-business-sdk/commit/c47f2f10538112832ed9b9b15a7053013927efb3))
* contacts message to be an array ([#62](https://github.com/famasya/whatsapp-business-sdk/issues/62)) ([d2064d6](https://github.com/famasya/whatsapp-business-sdk/commit/d2064d65edb4e6db2b46fcafe008db451dd287a9))
* Outdated template language codes ([f0f378c](https://github.com/famasya/whatsapp-business-sdk/commit/f0f378c502566b0f9540313a7cd1e9397162bb68))
* revert removal of "request_welcome" ([f9ec76c](https://github.com/famasya/whatsapp-business-sdk/commit/f9ec76c97e35527c9a3b37d6fb5991f0e7d811d2))
* Shared types ([dd79093](https://github.com/famasya/whatsapp-business-sdk/commit/dd7909316a4cedbca9868dfa3690ff806528a5b8))
* **types:** 🐛 interactive message ([4428f18](https://github.com/famasya/whatsapp-business-sdk/commit/4428f180372866e71787fb650c4a6b5a1badcc1a)), closes [#7](https://github.com/famasya/whatsapp-business-sdk/issues/7)
* **types:** 🐛 literal union autocompletion ([9714956](https://github.com/famasya/whatsapp-business-sdk/commit/97149567c19ac59a280e8f925d47961395e022fa))
* **types:** 🐛 template message language ([9b2d716](https://github.com/famasya/whatsapp-business-sdk/commit/9b2d716497cbe3a2da0b738d06c492281d8ea187))
* **types:** 🐛 webhook reaction message ([af2cdb1](https://github.com/famasya/whatsapp-business-sdk/commit/af2cdb10f69976a00966227a829c83fe0e8d7675)), closes [#8](https://github.com/famasya/whatsapp-business-sdk/issues/8)
* **types:** TemplateMessage optional fields ([9293c58](https://github.com/famasya/whatsapp-business-sdk/commit/9293c588e29e9084993508537d98198e183c00c8))
* **Webhooks:** InteractiveWebhookMessageNfmReply ([b222d00](https://github.com/famasya/whatsapp-business-sdk/commit/b222d00c569999cb89150b9c9ba79c8128737d5f))
* **Webhooks:** InteractiveWebhookMessageNfmReply generics ([ad4eb3c](https://github.com/famasya/whatsapp-business-sdk/commit/ad4eb3cb0953accd6f6454a04c20992c03a88772))
* **Webhooks:** Types for InteractiveWebhookMessageNfmReply ([f2fc3dd](https://github.com/famasya/whatsapp-business-sdk/commit/f2fc3dd9f73cd3b24c861ab2ae74fdbcac89770f))
* **Webhook:** Unit tests ([35ddc6c](https://github.com/famasya/whatsapp-business-sdk/commit/35ddc6cbc0a0cf181cd5f80752ff679621fc1c58))


### Features

* ✨ added location object types to webhooks ([38e86ab](https://github.com/famasya/whatsapp-business-sdk/commit/38e86ab48c54255ba39e3a7d80d1d01c086f09c5))
* ✨ added nfm_reply typings to webhooks ([8cbdebe](https://github.com/famasya/whatsapp-business-sdk/commit/8cbdebe208a7a386aebec50d7e3d482008ba8a87))
* ✨ added request_welcome as message type ([3320d28](https://github.com/famasya/whatsapp-business-sdk/commit/3320d28a4ff4f062bc631cf28b6dcd5ff3ae5efe))
* ✨ added support for cta_url interactive message type ([2e43fcb](https://github.com/famasya/whatsapp-business-sdk/commit/2e43fcb29feee98be81f647d2c5076680325641a))
* ✨ api error handling ([0c11d48](https://github.com/famasya/whatsapp-business-sdk/commit/0c11d48583f2d5ca0fcb603f4a66fb85635323bb))
* ✨ catalog messages and templates ([f4a0a5b](https://github.com/famasya/whatsapp-business-sdk/commit/f4a0a5bd5eaae48c0abec3735c4587f8233fac6d))
* ✨ documentation comments for the WABA client ([c98005a](https://github.com/famasya/whatsapp-business-sdk/commit/c98005a3109d27e6829cc2ca2589846af42f41cd))
* ✨ graph endpoint version ([615f7a4](https://github.com/famasya/whatsapp-business-sdk/commit/615f7a40a5646ac87a539940ba62ae9fa168b48a))
* ✨ health status endpoints ([2a97962](https://github.com/famasya/whatsapp-business-sdk/commit/2a97962bc557ebf5eea6939875db7fc3a2a8e7b9))
* ✨ identity change check feature for cloud API ([b5b1d8e](https://github.com/famasya/whatsapp-business-sdk/commit/b5b1d8e75a75930eb3fb3a44581be81466125988))
* ✨ index file ([95b6821](https://github.com/famasya/whatsapp-business-sdk/commit/95b68210b506765e1151927e39a51b062b97fd82))
* ✨ interactive messages (flow, catalog, send location request) ([907f268](https://github.com/famasya/whatsapp-business-sdk/commit/907f26829362b7de60295a92e2bfd6d8547e986f))
* ✨ mark message as read endpoint ([cd8e501](https://github.com/famasya/whatsapp-business-sdk/commit/cd8e50119c663f005bc1b5636c46b944270fbb79))
* ✨ messages endpoints ([a5b801d](https://github.com/famasya/whatsapp-business-sdk/commit/a5b801d4284f34b1905fbcd69f54c177b9366824))
* ✨ phone number registration endpoints ([5197804](https://github.com/famasya/whatsapp-business-sdk/commit/519780426b1293488dfa901abc655b9eb191c1af))
* ✨ phone numbers endpoints ([c9e1978](https://github.com/famasya/whatsapp-business-sdk/commit/c9e19784ad6db7a51f4963d2c93c33fe18c3dcf8))
* ✨ support for reaction messages and reply-to ([0f59d40](https://github.com/famasya/whatsapp-business-sdk/commit/0f59d408e9e47d75cd68b47c792d490d5730f79d))
* ✨ updated cloud API version ([5baff86](https://github.com/famasya/whatsapp-business-sdk/commit/5baff86b4df1aa0e9983a02e12200bf46ee5366e))
* ✨ updated waba client api ([2b52118](https://github.com/famasya/whatsapp-business-sdk/commit/2b521181c2ccffe442bc980e0c450c2e26d50a83))
* ✨ updated WABAClient baseURL ([aca3d65](https://github.com/famasya/whatsapp-business-sdk/commit/aca3d65cf3d71c0f362f6c39653ddd0a73d73c11))
* ✨ updated webhook payload and added the new biz_opaque_callback_data field ([655628c](https://github.com/famasya/whatsapp-business-sdk/commit/655628c410e08f99216b2a4da18a22f84c9d1024))
* ✨ webhook client ([27c3d1a](https://github.com/famasya/whatsapp-business-sdk/commit/27c3d1aeca40af2551a05ceb118924c3e9031622))
* ✨ webhooks typos ([5e36c35](https://github.com/famasya/whatsapp-business-sdk/commit/5e36c354c5ce1d45bd0807d7e4efe1a306ded9ab))
* business endpoints ([69a44c7](https://github.com/famasya/whatsapp-business-sdk/commit/69a44c7847ce5f5e17168829dbd9d727cb34e895))
* improvements type on interactive object ([68fba65](https://github.com/famasya/whatsapp-business-sdk/commit/68fba653445c7baccb8eebcb53ca078eccf75fad))
* media endpoints ([b147a05](https://github.com/famasya/whatsapp-business-sdk/commit/b147a05c8053d5b2775a37d03c52694ee1112532))
* project initialization!! ([87590b9](https://github.com/famasya/whatsapp-business-sdk/commit/87590b92be73f212f7c448fcd2ed76f9f6f82d25))
* publish ([5d43750](https://github.com/famasya/whatsapp-business-sdk/commit/5d437509a1262618cefed4800d656633317c3ccd))
* **Webhooks:** Improve interactive and status types ([dbd4bd9](https://github.com/famasya/whatsapp-business-sdk/commit/dbd4bd98643338c2dc29dd6facaef3673be6b987))
* **WebhooksTypes:** fix incorrect types ([068306f](https://github.com/famasya/whatsapp-business-sdk/commit/068306f6da9fb02b43b86e53007ba58862ca4c5a))


### Reverts

* Revert "chore(release): 1.1.0 [skip ci]" ([fac6ec1](https://github.com/famasya/whatsapp-business-sdk/commit/fac6ec1f5d1fa723c04ebc0ee677caf782fa4633))
* Revert "chore(release): 1.1.0 [skip ci]" ([9c87d27](https://github.com/famasya/whatsapp-business-sdk/commit/9c87d273d99c3fc6168c62f3d1576a0cdd5e1ee9))

## [1.14.3](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.14.2...v1.14.3) (2025-02-03)


### Bug Fixes

* contacts message to be an array ([#62](https://github.com/MarcosNicolau/whatsapp-business-sdk/issues/62)) ([d2064d6](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/d2064d65edb4e6db2b46fcafe008db451dd287a9))

## [1.14.2](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.14.1...v1.14.2) (2024-11-14)


### Bug Fixes

* Outdated template language codes ([f0f378c](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/f0f378c502566b0f9540313a7cd1e9397162bb68))

## [1.14.1](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.14.0...v1.14.1) (2024-09-14)


### Bug Fixes

* **Webhooks:** InteractiveWebhookMessageNfmReply generics ([ad4eb3c](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/ad4eb3cb0953accd6f6454a04c20992c03a88772))
* **Webhooks:** Types for InteractiveWebhookMessageNfmReply ([f2fc3dd](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/f2fc3dd9f73cd3b24c861ab2ae74fdbcac89770f))

# [1.14.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.13.0...v1.14.0) (2024-08-21)


### Bug Fixes

* Comments and duplicate variable ([c47f2f1](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/c47f2f10538112832ed9b9b15a7053013927efb3))
* **Webhooks:** InteractiveWebhookMessageNfmReply ([b222d00](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/b222d00c569999cb89150b9c9ba79c8128737d5f))
* **Webhook:** Unit tests ([35ddc6c](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/35ddc6cbc0a0cf181cd5f80752ff679621fc1c58))


### Features

* **Webhooks:** Improve interactive and status types ([dbd4bd9](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/dbd4bd98643338c2dc29dd6facaef3673be6b987))

# [1.13.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.12.0...v1.13.0) (2024-08-14)


### Features

* improvements type on interactive object ([68fba65](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/68fba653445c7baccb8eebcb53ca078eccf75fad))

# [1.12.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.11.0...v1.12.0) (2024-08-03)


### Bug Fixes

* revert removal of "request_welcome" ([f9ec76c](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/f9ec76c97e35527c9a3b37d6fb5991f0e7d811d2))
* Shared types ([dd79093](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/dd7909316a4cedbca9868dfa3690ff806528a5b8))


### Features

* **WebhooksTypes:** fix incorrect types ([068306f](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/068306f6da9fb02b43b86e53007ba58862ca4c5a))

# [1.11.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.10.0...v1.11.0) (2024-07-29)


### Features

* ✨ added location object types to webhooks ([38e86ab](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/38e86ab48c54255ba39e3a7d80d1d01c086f09c5))
* ✨ added request_welcome as message type ([3320d28](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/3320d28a4ff4f062bc631cf28b6dcd5ff3ae5efe))

# [1.10.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.9.0...v1.10.0) (2024-05-30)


### Features

* ✨ added support for cta_url interactive message type ([2e43fcb](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/2e43fcb29feee98be81f647d2c5076680325641a))

# [1.9.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.8.2...v1.9.0) (2024-05-30)


### Features

* ✨ added nfm_reply typings to webhooks ([8cbdebe](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/8cbdebe208a7a386aebec50d7e3d482008ba8a87))

## [1.8.2](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.8.1...v1.8.2) (2024-05-29)


### Bug Fixes

* 🐛 message.ts ([eed637c](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/eed637c5d294447fa235d7f5e6051301f5c5e03e)), closes [#32](https://github.com/MarcosNicolau/whatsapp-business-sdk/issues/32)

## [1.8.1](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.8.0...v1.8.1) (2024-05-27)


### Bug Fixes

* 🐛 interactive message optional fields ([de9662d](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/de9662d4a4709b53174022af5fbd425cb1b6b47a)), closes [#30](https://github.com/MarcosNicolau/whatsapp-business-sdk/issues/30)
* 🐛 webhook timestamp type ([bc6f579](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/bc6f57908bfdf011fcbbf58e176d393d5edf2b71))

# [1.8.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.7.2...v1.8.0) (2024-02-01)


### Features

* ✨ graph endpoint version ([615f7a4](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/615f7a40a5646ac87a539940ba62ae9fa168b48a))
* ✨ health status endpoints ([2a97962](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/2a97962bc557ebf5eea6939875db7fc3a2a8e7b9))
* ✨ interactive messages (flow, catalog, send location request) ([907f268](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/907f26829362b7de60295a92e2bfd6d8547e986f))
* ✨ updated webhook payload and added the new biz_opaque_callback_data field ([655628c](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/655628c410e08f99216b2a4da18a22f84c9d1024))

## [1.7.2](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.7.1...v1.7.2) (2023-10-27)


### Bug Fixes

* **types:** TemplateMessage optional fields ([9293c58](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/9293c588e29e9084993508537d98198e183c00c8))

## [1.7.1](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.7.0...v1.7.1) (2023-07-26)


### Bug Fixes

* 🐛 update identity check endpoint ([40bdd2b](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/40bdd2b3885899bda677bc9f3a117644469975f1))

# [1.7.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.6.0...v1.7.0) (2023-07-26)


### Features

* ✨ documentation comments for the WABA client ([c98005a](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/c98005a3109d27e6829cc2ca2589846af42f41cd))

# [1.6.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.5.2...v1.6.0) (2023-07-16)


### Features

* ✨ catalog messages and templates ([f4a0a5b](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/f4a0a5bd5eaae48c0abec3735c4587f8233fac6d))
* ✨ identity change check feature for cloud API ([b5b1d8e](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/b5b1d8e75a75930eb3fb3a44581be81466125988))
* ✨ updated cloud API version ([5baff86](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/5baff86b4df1aa0e9983a02e12200bf46ee5366e))

## [1.5.2](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.5.1...v1.5.2) (2023-03-25)


### Bug Fixes

* **types:** 🐛 webhook reaction message ([af2cdb1](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/af2cdb10f69976a00966227a829c83fe0e8d7675)), closes [#8](https://github.com/MarcosNicolau/whatsapp-business-sdk/issues/8)

## [1.5.1](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.5.0...v1.5.1) (2023-03-18)


### Bug Fixes

* **types:** 🐛 interactive message ([4428f18](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/4428f180372866e71787fb650c4a6b5a1badcc1a)), closes [#7](https://github.com/MarcosNicolau/whatsapp-business-sdk/issues/7)
* **types:** 🐛 template message language ([9b2d716](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/9b2d716497cbe3a2da0b738d06c492281d8ea187))

# [1.5.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.4.0...v1.5.0) (2023-02-07)


### Bug Fixes

* 🐛 wABAErrorHandler ([f531d38](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/f531d38d8caebe091f0b7e405e33027655c0f673))
* **types:** 🐛 literal union autocompletion ([9714956](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/97149567c19ac59a280e8f925d47961395e022fa))


### Features

* ✨ support for reaction messages and reply-to ([0f59d40](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/0f59d408e9e47d75cd68b47c792d490d5730f79d))
* ✨ updated waba client api ([2b52118](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/2b521181c2ccffe442bc980e0c450c2e26d50a83))

# [1.4.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.3.0...v1.4.0) (2022-12-04)


### Bug Fixes

* 🐛 undefined fields in webhookHandler ([59ddcbb](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/59ddcbb7aa4aa39f8af8b0bc2e9c1444dc6d99f7))


### Features

* ✨ webhook client ([27c3d1a](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/27c3d1aeca40af2551a05ceb118924c3e9031622))

# [1.3.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.2.3...v1.3.0) (2022-12-03)


### Features

* ✨ updated WABAClient baseURL ([aca3d65](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/aca3d65cf3d71c0f362f6c39653ddd0a73d73c11))

## [1.1.1](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.1.0...v1.1.1) (2022-05-26)


### Bug Fixes

* 🐛 endpoints and typos ([fd9b9f0](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/fd9b9f080c60e6e5246e26fb8b5cc50036cc3001))

# [1.1.0](https://github.com/MarcosNicolau/whatsapp-business-sdk/compare/v1.0.0...v1.1.0) (2022-05-25)


### Bug Fixes

* 🐛 imports paths ([57b0194](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/57b01949f8f7e99c10ff445096afc4965a2afcbf))
* 🐛 wABA error handler default message ([af3d4ef](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/af3d4eff95821a5ec7db0a3659507ff3064d4e68))
* 🐛 wABAClient error handler and endpoints ([e1d457a](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/e1d457a900e2b091cd533a4991a5015322e14305))


### Features

* ✨ api error handling ([0c11d48](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/0c11d48583f2d5ca0fcb603f4a66fb85635323bb))
* ✨ index file ([95b6821](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/95b68210b506765e1151927e39a51b062b97fd82))
* ✨ mark message as read endpoint ([cd8e501](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/cd8e50119c663f005bc1b5636c46b944270fbb79))
* ✨ messages endpoints ([a5b801d](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/a5b801d4284f34b1905fbcd69f54c177b9366824))
* ✨ phone number registration endpoints ([5197804](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/519780426b1293488dfa901abc655b9eb191c1af))
* ✨ phone numbers endpoints ([c9e1978](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/c9e19784ad6db7a51f4963d2c93c33fe18c3dcf8))
* ✨ webhooks typos ([5e36c35](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/5e36c354c5ce1d45bd0807d7e4efe1a306ded9ab))
* business endpoints ([69a44c7](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/69a44c7847ce5f5e17168829dbd9d727cb34e895))
* media endpoints ([b147a05](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/b147a05c8053d5b2775a37d03c52694ee1112532))


### Reverts

* Revert "chore(release): 1.1.0 [skip ci]" ([fac6ec1](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/fac6ec1f5d1fa723c04ebc0ee677caf782fa4633))
* Revert "chore(release): 1.1.0 [skip ci]" ([9c87d27](https://github.com/MarcosNicolau/whatsapp-business-sdk/commit/9c87d273d99c3fc6168c62f3d1576a0cdd5e1ee9))
