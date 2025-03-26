import GenericService from "./GenericService";

class BlogService extends GenericService {
  constructor() {
    super();
  }

  getAllPostBlogs = () => {
    return this.get("blogs");
  };

  getSingleBlog = (id) => {
    return this.get("blogs/" + id);
  };

  deleteBlog = (id) => {
    return this.delete("blogs/" + id);
  };

  updateBlog = (id, data) => {
    return this.update("blogs/" + id, data);
  };
}

let blogService = new BlogService();

export default blogService;
