import {useRouter} from "next/router";

export default function Page() {
    const router = useRouter()
    const {id} = router.query
    console.dir(router)
    console.log(id)
    return (<>books id : {id}</>)
}