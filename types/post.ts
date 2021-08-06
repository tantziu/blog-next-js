import TagType from "./tag"

type PostType = {
    slug: string
    title: string
    date: string
    coverImage: string
    // author:Author
    excerpt: string
    ogImage: {
        url: string
    }
    content: string
    tag: TagType
}

export default PostType