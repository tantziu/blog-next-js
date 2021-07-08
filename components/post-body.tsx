import markdownStyles from '../styles/markdown-styles.module.scss'
import styles from '../styles/post-body.module.scss'


type Props = {
    content: string
}
 
const PostBody = ({content}:Props) =>
{
    return (
        <div className={styles.PostBody}>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
            >

            </div>
        </div>
    )
}

export default PostBody

// const Markdown: FunctionComponent<IProps> = ({content}) => {
//     const components: Partial<NormalComponents & SpecialComponents> = {
//         code({node, inline, className, children, ...props}) {
//             const match = /language-(\w+)/.exec(className || '');
    
//             return (!inline && match) ? (
//                 <SyntaxHighlighter style={materialLight} PreTag="div" language={match[1]} children={String(children).replace(/\n$/, '')} {...props} />
//             ) : (
//                 <code className={className ? className : ""} {...props}>
//                     {children}
//                 </code>
//             )
//         }
//     }

//     return <div className="markdown-body">
//         <ReactMarkdown components={components} children={content} />
//     </div>
// }

// export default Markdown;