// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import remark from 'remark'
// import html from 'remark-html'

// const postsDirectory = path.join(process.cwd(), 'posts')

// export function getSortedPostsData() {
//     const fileNames = fs.readdirSync(postsDirectory)
//     const allPostsData = fileNames.map(fileName => {
//         const id = fileName.replace(/\.md$/, '')

//         const fullPath = path.join(postsDirectory, fileName)
//         const fileContents = fs.readFileSync(fullPath, 'utf8')

//         const matterResult = matter(fileContents)

//         return {
//             id,
//             ...(matterResult.data as {date:string, title:string})
//         }
//     })

//     return allPostsData.sort((a, b) => {
//         if (a.date < b.date) {
//             return 1
//         } else {
//             return -1
//         }
//     })
// }

// export function getAllPostIds() {
//     const fileNames = fs.readdirSync(postsDirectory)

//     return fileNames.map(fileName => {
//         return {
//           params: {
//             id: fileName.replace(/\.md$/, '')
//           }
//         }
//       })
// }

// export async function getPostData(id:string) {
//     const fullPath = path.join(postsDirectory, `${id}.md`)
//     const fileContest = fs.readFileSync(fullPath, 'utf8')

//     const matterResult = matter(fileContest)

//     const processedContent = await remark()
//         .use(html)
//         .process(matterResult.content)
//     const contentHtml = processedContent.toString()

//     return {
//         id,
//         contentHtml,
//         ...(matterResult.data as {date:string, title:string})
//     }
// }

// // ***********************************************************************
// export function getPostSlugs() {
//     return fs.readdirSync(postsDirectory)
// }

// export function getPostBySlug(slug:string, fields:string[] = []) {
//     const realSlug = slug.replace(/\.md$/, '')
//     const fullPath = path.join(postsDirectory, `${realSlug}.md`)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')
//     const {data, content} = matter(fileContents)

//     type Items = {
//         [key:string]:string
//     }

//     const items:Items = {}

//     fields.forEach((field) => {
//         if (field === 'slug') {
//             items[field] = realSlug
//         }
//         if (field === 'content') {
//             items[field] = content
//         }

//         if (data[field]) {
//             items[field] = data[field]
//         }
//     })

//     return items
// }

// export function getAllPosts(fields:string[] = []) {
//     const slugs = getPostSlugs()
//     const posts = slugs
//         .map((slug) => getPostBySlug(slug, fields))
//         .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//     return posts

// }
// // export async function getSortedPostsData() {
// //     // Instead of the file system,
// //     // fetch post data from an external API endpoint
// //     const res = await fetch('..')
// //     return res.json()
// // }
const Posts = () => {}
export default Posts