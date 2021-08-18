import fs, { readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')


export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: any
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'meta') {
      items[field] = data
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
  // return {slug: realSlug, meta: data, data}
}

export function getAllPosts(fields: string[] = []) {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

// export function getAllTags() {
//   const tagsDirectory = join(process.cwd(), '_tags')
//   const filenames = fs.readdirSync(tagsDirectory)

//   return filenames.map(filename => {
//     const file = fs.readFileSync(join(process.cwd(), '_tags', filename), 'utf-8')

//     const data = JSON.parse(file)
//     const slug = filename.replace(/\.json/, '')

//     return {
//       ...data,
//       permalink: `/tags/${slug}`,
//       tagPictureUrl: `/assets/blog/tags/${slug}.png`,
//       slug
//     }
//   })
// }

// export function getTagBySlug(slug) {
//   const file = fs.readFileSync(join(process.cwd(), '_tags', `${slug}.json`), 'utf-8')

//   const data = JSON.parse(file)
//   console.log("data", data)
//   return {
//     ...data,
//     permalink: `/tags/${slug}`,
//     tagPictureUrl: `/assets/blog/tags/${slug}.png`,
//     slug
//   }
// }

function getUniqueTags() {
  const tagsData = getAllPosts(['tags'])
  let tagSet = new Set()
  for (let data of tagsData) {
    for (let tagName of data['tags']) {
      tagSet.add(tagName)
    }
  }

  return Array.from(tagSet)
}

export function getTagsBySlug(slugList) {
  const uniqueTags = getUniqueTags()
  let tags = []
  for (let slug of slugList) {
    tags.push(
      {
        name: slug,
        tagPictureUrl: `/assets/blog/tags/${slug}.png`,
        permalink: `/categories/${slug}`,
        slug
      }
    )
  }
  return tags
}

export function getTagBySlug(slug) {
  return {
      name: slug,
      tagPictureUrl: `/assets/blog/tags/${slug}.png`,
      permalink: `/categories/${slug}`,
      slug
  }
}

export function getAllTags() {
  const uniqueTags = getUniqueTags()
  return uniqueTags.map(slug => {
    return {
      name: slug,
      tagPictureUrl: `/assets/blog/tags/${slug}.png`,
      permalink: `/categories/${slug}`,
      slug
    }
  })
}
