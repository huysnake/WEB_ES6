import { addProject } from "../api/project";
import { useEffect, router } from "../lib";

const AdminProjectsAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");
        // const projectImages = document.querySelector("#project-images");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            try {
                // Tạo proejct mới
                const formData = {
                    name: projectName.value,
                    author: projectAuthor.value,
                };
                await addProject(formData);
                router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });

    // const uploadFlie = (files) => {};
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label ">Ten Bai Viet</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group">
                <label for="" class="form-label mb-3">Note</label>
                <input type="text" class="form-control" id="project-author" />
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label ">ảnh sản phẩm</label>
                <input type="file" class="form-control" multiple id="project-images" />
            </div>
            <button class="btn btn-danger ">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminProjectsAddPage;