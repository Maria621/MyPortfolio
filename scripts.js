let about = document.querySelector('#about')
let areaProfile = document.querySelector('#area')

async function getApiGithub() {
    try {
        const dataProfile = await fetch('https://api.github.com/users/Maria621')
        const profile = await dataProfile.json()

        let content = `
            <img src="${profile.avatar_url}" alt="Foto do Perfil do Github - ${profile.name}">
            <article class="section_content">
                <h1>Que Sou?</h1>
                <p>
                Tenho formação em Gestão de Tecnologia da Informação e  conhecimento como Desenvolvedor Full Stack Junior. Trabalhei anteriormente como Jovem Aprendiz na recepção do Salomão Zoppi e também atuei como estoquista no Boticário. Durante meu tempo livre, me dediquei a um trabalho voluntário de arrecadação de alimentos para cestas básicas.
            </p>
            <p>
                Atualmente, sou líder de projetos integrados multidisciplinares na faculdade. Tenho uma paixão pelo desenvolvimento e adoro criar e inovar. Além disso, valorizo ​​a leitura e a minha participação na igreja.
            </p>
            <p>
                Ao longo das minhas experiências, aprendi a ouvir atentamente e ser cada vez mais empático. Possuo habilidades técnicas em desenvolvimento full stack, incluindo conhecimento em linguagens de programação sendo elas Java, Spring Bool, Maven, My SQL, react , Node.js , HTML/CSS e o basico de Phyton. Também possuo habilidades comportamentais, como trabalho em equipe, comunicação eficaz e resolução de problemas.
            </p>

                <div class="section_github flex">
                    <a class="btn" href="${profile.html_url}">Github</a>
                    <p>${profile.followers} Seguidores</p>
                    <p>${profile.public_repos} Repositórios</p>
                </div>
            </article>
        `
        about.innerHTML += content

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()