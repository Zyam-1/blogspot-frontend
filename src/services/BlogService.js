import GenericService from "./GenericService";

class BlogService extends GenericService {
  constructor() {
    super();
  }

  getAllPostBlogs = () => {
    return this.get("blogs");
  };

  getSingleBlog = (id) => {
    this.get("blogs/" + id);
  };

  deleteBlog = (id) => {
    this.delete("blogs/" + id);
  };

  updateBlog = (id, data) => {
    this.update("blogs/" + id, data);
  };
}

let blogService = new BlogService();

export default blogService;
