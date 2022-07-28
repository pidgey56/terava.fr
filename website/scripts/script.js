function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// delay(1).then(
//     () => {
//         console.log(document.querySelector(".container-anim1"))
//         const observer = new IntersectionObserver(entries => {
//             console.log(entries)
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     document.querySelectorAll(".animated")[0].classList.add("fadeInBottom")
//                 }
//             })
//         })
//         observer.observe(document.querySelector(".container-anim1"));
//     }
// );

function animall() {
    delay(200).then(
        () => {

            ellAll = document.querySelectorAll(".container-anim")
            ellAll.forEach(element => {
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // element.classList.remove("hidden")
                            element.classList.add("fadeInBottom")
                        }
                    })
                })
                observer.observe(element);
            });
        }
    )
}

animall()
