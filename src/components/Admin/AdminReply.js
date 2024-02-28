import React, {useRef} from "react";
import { Editor } from "@tinymce/tinymce-react";


const AdminReply = () => {
  const editorRef = useRef(null);

  
  return (
    <div>
      <p>Reply</p>
      <Editor
        apiKey="5mhh69z795oqwvsb5r5cvzv1n8v0zllu3sft8o947z6nbhrh"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </div>
  );
};

export default AdminReply;
