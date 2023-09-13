import {useMainStore} from "~/store/mainStore";
import {ref} from "vue"


export function useSearchInputComposable(){
    const {searchForImage} = useMainStore()
    const searchWord = ref('')

    return {searchForImage, searchWord}
}