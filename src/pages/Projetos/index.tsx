import React, {useCallback ,useEffect, useState } from "react";

import Header from "../../components/Header";
import CardProject from "../../components/CardProject";
import Loading from "../../components/Loading";

import axios from 'axios'

import './styles.css';

import Pointer from '../../assets/images/pointer.png';
import DivPageImg from '../../assets/images/div-page.png';
import ImgProjeto from '../../assets/images/tip-calculator.png';

interface repoProps {
    full_name: string;
    default_branch: string;
    description?: string;
    html_url: string;
    name: string;
}

interface imageStatus {
    src: string,
    status: string
}

export default function Projects() {

    const [repos, setRepos] = useState<repoProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    function checkIfImageExists(src: string): Promise<imageStatus> {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve({src, status: 'ok'});
            img.onerror = () => resolve({src, status: 'error'});
            img.src = src
        })
    }
    const getRepos = async () => {
        setLoading(true);
        const response = await axios.get('https://api.github.com/users/marcospaulo12345/repos')

        let auxArray = []
        for (var repo of response.data) {
            try {
                const existImage = await checkIfImageExists(`https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/preview.png`)
                if(existImage?.status === 'ok'){
                    auxArray.push(repo)
                }
            } catch (error) {
                console.log(error)
            }
        }
        setRepos(auxArray)
        setLoading(false);
    }

    function fadeIn() {
        var items = document.getElementsByClassName('card-project');
        for (let i = 0; i < items.length; ++i) {
            setTimeout(() => {
                items[i]?.classList.add('fadein')
            }, i * 200)
        }
        console.log(document.getElementsByClassName('fadein'))
    }

    useEffect(() => {
        getRepos();
    }, [])

    useEffect(() => {
        fadeIn()
    }, [repos])

    return (
        <div className="container-projects">
            <Header />

            <div className="title-projects">
                <img src={Pointer} />
                <h3>Projetos</h3>
            </div>

            {loading ? (
                <Loading />
            ) : (
                <section className="list-projects">
                    {repos.map((repo, index) => (
                        <div key={index}>
                            <CardProject 
                                image={`https://raw.githubusercontent.com/${repo?.full_name}/${repo.default_branch}/preview.png`} 
                                title={repo.name} 
                                description={repo?.description || ""} 
                            />
                        </div>
                    ))}
                    {/* <img src={`https://raw.githubusercontent.com/${repos}/main/preview.png`} /> */}
                </section>
            )}

        </div>
    )
}