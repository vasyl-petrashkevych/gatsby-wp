import React from "react"
import {graphql} from "gatsby"
import {Header, Content} from "../components";
import 'bootstrap/dist/css/bootstrap-grid.css'
import styled from "styled-components";
import 'normalize.css'
import '../style.scss'

const Container = styled.main`
  margin-top: 80px;
`
export default function Page({location, data, pageContext}) {
    console.log(data)
    return (
        <>
            <Header location={location}/>
            <Container>
                {data.wpPage.blocks.map((block, id) => <Content key={id} content={block}/>)}
            </Container>
        </>
    )
}

export const query = graphql`
    query($id: String!) {
        wpPage(id: {eq: $id}) {
            title
            slug
            blocks {
                name
                dynamicContent
                attributesJSON
            }
        }
    }
`