/** Mock Nuxt's useState to be a simple ref for unit testing. #appが読み込みエラーになってしまう **/

// import {ref} from "vue";
// jest.mock("#app", () => ({
//     useState: <T>(key: string, init: () => T) => {
//         return ref(init())
//     }
// }))
