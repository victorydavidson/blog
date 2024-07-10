import "./write.css";

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" 
            src="https://dthezntil550i.cloudfront.net/lm/latest/lm2107152304197510011852869/1280_960/b604cb70-29c0-42c7-93dd-c7137be46d92.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className=" writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
};
