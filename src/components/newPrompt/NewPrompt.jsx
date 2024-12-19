import "./newPrompt.css";


const NewPrompt = () => {
  return (
    <div className="newPrompt">
      <form action="newForm">
        <label htmlFor="file">
          <img src="/attachment.png" alt=""/>
        </label>
        <input id="file" type="file" multiple={false} hidden/>
        <input type="text" placeholder="Ask Anything..." />
        <button>
        <img src="/arrow.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default NewPrompt