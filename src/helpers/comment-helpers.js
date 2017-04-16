export const appendReplies = (comments, commentChain, replies) => {
  const updateComments = (comments, commentChainCopy) => {
    if (commentChainCopy.length === 1) {
      return comments.map((comment) => {
        if (comment.id === commentChainCopy[0]) {
          return Object.assign(comment, {
              kids: replies.map((reply) => (
                  Object.assign(
                    reply, {
                      showComment: true,
                      commentChain: commentChain.concat([reply.id])
                    }
                  ))
              )
            })
        } else {
          return comment
        }
      })
    } else {
      return comments.map((comment) => {
        if (comment.id === commentChainCopy[0]) {
          const kids = updateComments(comment.kids, commentChainCopy.slice(1))
          return Object.assign(comment, { kids })
        } else {
          return comment
        }
      })
    }
  }

  return updateComments(comments, commentChain)
}

export const toggleViewComment = (comments, commentChain = [], id) => {
  if (commentChain.length === 1) {
    return comments.map((comment) => {
      return comment.id === id
        ? Object.assign(comment, { showComment: !comment.showComment })
        : comment
    })
  } else {
    return comments.map((comment) => {
      if (comment.id === commentChain[0]) {
        const showComment = toggleViewComment(comment.kids, commentChain.slice(1), id)
        return Object.assign(comment, { showComment })
      } else {
        return comment
      }
    })
  }
}
