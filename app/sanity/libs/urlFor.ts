// import { client } from "./client"
import { apiClient } from "./apiClient";
import  imageUrlBuilder  from "@sanity/image-url";

const builder = imageUrlBuilder(apiClient);

function urlFor(source:any){
    return builder.image(source)
}
export default urlFor;