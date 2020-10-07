const blogEntries = [
    {
        date: "Wednesday, 7 October 2020",
        blog_entry: "Entry 1, first paragraph.<br> Entry 1, second paragraph."
    },
    {
        date: "Tuesday, 6 October 2020",
        blog_entry: "Entry 2, first paragraph.<br> Entry 2, second paragraph."
    }

]

$(document).ready(() => {

    console.log(blogEntries);
    console.log("Page loaded!");

    for (i = 0; i < blogEntries.length; i++) {
        let card = '<div class="card m-2"><div class="card-body"><span>' + blogEntries[i].blog_entry + '</span></div></div>';

        $("#dynamic-body").append(card);
    }
})