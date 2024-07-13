import React from 'react'

function Textform() {
  return (
    <>
    <div className="mb-3">
    <label for="floatingTextarea">Comments</label>
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="6"></textarea>
</div>
    </>
  )
}

export default Textform
