import PostType from "./post"

type TagType = {
    slug: string
    name: string
    permalink: string
    tagPictureUrl: string
    posts?: PostType[]
}

export default TagType