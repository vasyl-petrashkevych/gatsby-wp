import React from "react"
import {graphql} from "gatsby"
import {Header} from "../components";
import 'bootstrap/dist/css/bootstrap-grid.css'
import styled from "styled-components";
import 'normalize.css'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'
import {convertToBgImage} from "gbimage-bridge"

const Container = styled.main`
  margin-top: 80px;
`
export default function Page({location, data, pageContext}) {
    const someImage = data.wpPage.homePage.image ? getImage(data.wpPage.homePage.image.localFile) : undefined
    const bgimage =  data.wpPage.homePage.image ? convertToBgImage(someImage) : undefined;
    return (
        <>
            <Header location={location}/>
            <Container>
                {data.wpPage.homePage.description && (
                    <>
                        <BackgroundImage
                            Tag="section"
                            {...bgimage}
                            preserveStackingContext
                        >

                            <div className="container pt-3 pb-3 d-flex flex-column align-items-center justify-content-center" style={{color: '#fff', minHeight: 400}}>
                                <div className="row">
                                    <div className="col-md-12 d-flex flex-column align-items-center">
                                            <h1>{data.wpPage.homePage.title}</h1>
                                        <p>{data.wpPage.homePage.description}</p>
                                    </div>
                                </div>
                            </div>
                        </BackgroundImage>

                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <GatsbyImage image={getImage(data.wpPage.homePage.image2Column.localFile)}
                                                 alt="test"/>
                                </div>
                                <div className="col-md-6 d-flex flex-column justify-content-center">
                                    <h2>{data.wpPage.homePage.title2Column}</h2>
                                    <div dangerouslySetInnerHTML={{__html: data.wpPage.homePage.text2Column}}/>
                                </div>
                            </div>
                        </div>
                    </>
                )
                }
            </Container>
        </>
    )
}

export const query = graphql`
    query($id: String!) {
        wpPage(id: {eq: $id}) {
            title
            slug
            homePage {
                description
                flip
                text2Column
                title2Column
                title
                image {
                    localFile {
                        childImageSharp {
                            id
                            gatsbyImageData
                        }
                    }
                }
                image2Column {
                    localFile {
                        childImageSharp {
                            id
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`