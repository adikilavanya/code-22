// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(eachBlog =>
        eachBlog(<BlogItem key={eachBlog.id} blog Details={eachBlog} />),
      )}
    </ul>
  )
}

export default BlogList
