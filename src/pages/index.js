import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <h1>Amazing Pandas Eating Things</h1>
        <div>
            <h4>{data.allMarkdownRemark.totalCount} posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div>
                    <h2>{node.frontmatter.title}</h2>
                    <h4>{node.frontmatter.date}</h4>

                    <p>{node.excerpt}</p>
                </div>
            ))}
        </div>
    </Layout>
)

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                    excerpt
                }
            }
        } 
    }
`