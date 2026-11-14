const inputTag = document.getElementById("inputTag");
const containerTag = document.getElementById("containerTag");

inputTag.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && this.value.trim() !== "") {
        const textoTag = this.value.trim();
        criarTag(textoTag);
        this.value = "";
    }
});

function criarTag(text) {
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.innerHTML = `${text} <span class="remover-tag" onclick="this.parentElement.remove()">&times;</span>`;
    containerTag.insertBefore(tag, inputTag)
}