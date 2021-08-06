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
    tags: TagType[]
}

export default PostType