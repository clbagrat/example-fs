export const articleQuery = gql`
  Article($eid) {
    title,
    eid,
    content {
      title,
      data
    }
    tableOfContent {
      name
      url
    }
  }
`
