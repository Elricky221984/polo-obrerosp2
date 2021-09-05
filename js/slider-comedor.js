addEventListener('DOMContentLoaded', ()=>{

    const imagenes = ['img/comedor/olla1.jpeg', 'img/comedor/olla2.jpeg', 'img/comedor/olla3.jpeg', 'img/comedor/olla4.jpeg', 'img/comedor/olla5.jpeg',
    'img/comedor/olla6.jpeg', 'img/comedor/olla7.jpeg', 'img/comedor/olla8.jpeg', 'img/comedor/olla9.jpeg', 'img/comedor/olla10.jpeg', 'img/comedor/olla11.jpeg',
    'img/comedor/olla12.jpeg', 'img/comedor/olla13.jpeg', 'img/comedor/olla14.jpeg', 'img/comedor/olla15.jpeg', 'img/comedor/olla16.jpeg'
    , 'img/comedor/olla17.jpeg', 'img/comedor/olla18.jpeg', 'img/comedor/olla19.jpeg', 'img/comedor/olla20.jpeg', 'img/comedor/olla21.jpeg', 'img/comedor/olla22.jpeg'
    , 'img/comedor/olla23.jpeg', 'img/comedor/olla24.jpeg', 'img/comedor/olla25.jpeg', 'img/comedor/olla26.jpeg', 'img/comedor/olla27.jpeg']

    let i = 1
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
   
    const progressBar = document.querySelector('#progress-bar')
    const divIndicadores = document.querySelector('#indicadores')
    let porcentaje_base = 100/imagenes.length
    let porcentaje_actual = porcentaje_base
    
    for(let index = 0; index < imagenes.length; index++){
        const div = document.createElement('div')
        div.classList.add('circles')
        div.id = index
        divIndicadores.appendChild(div)
    }
    progressBar.style.width = `${porcentaje_base}%`
    img1.src = imagenes[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classList.add('resaltado')

    const slideshow = () =>{
        img2.src = imagenes[i]
        const circulo_actual = Array.from(circulos).find(el => el.id == i)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
        circulo_actual.classList.add('resaltado')

        img2.classList.add('active')
        i++
        porcentaje_actual+=porcentaje_base
        progressBar.style.width = `${porcentaje_actual}%`
        if(i == imagenes.length){
            i = 0
            porcentaje_actual = porcentaje_base - porcentaje_base
        }

        setTimeout(() =>{
            img1.src = img2.src
            img2.classList.remove('active')
        }, 1000)
       
    }

    setInterval(slideshow, 2000)

})