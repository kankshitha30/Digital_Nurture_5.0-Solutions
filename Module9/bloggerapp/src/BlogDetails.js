import { blogs } from "./Data";

function BlogDetails() {

    return (
        <div>
            <h2>Blog Details</h2>

            {
                blogs.map(blog => (
                    <div key={blog.id}>
                        <h1>{blog.title}</h1>
                        <h4>{blog.author}</h4>
                        <p>{blog.content}</p>
                    </div>
                ))
            }

        </div>
    );
}

export default BlogDetails;