import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css'

// Return a list of possible value for id
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false // any paths not returned by getStaticPaths will result in a 404 page
    }
}

 // Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
    // const postData = getPostData(params.id)
    // add await because getPostData method is a async type
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

  export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <br />
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <br />
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            
            <br/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }