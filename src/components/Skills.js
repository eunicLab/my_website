import React from 'react';
import '../App.css';

import { GrHtml5, GrCss3, GrReactjs, GrGraphQl } from 'react-icons/gr';
import { DiJavascript1, DiPostgresql, DiScrum, DiSass } from 'react-icons/di';
import { FaNode, FaAws, FaAngular, FaSearchengin } from 'react-icons/fa';
import { SiRedux, SiMongodb, SiTypescript } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';

function Skills() {
  return (
    <div>
      <main>
        <section className='section-features'>
          <div className='row'>
            <div className='skillIcon col-1-of-4'>
              <GrHtml5 className='iconForSkill' alt='email icon' />
              <div className='skillName'>HTML5</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <GrCss3 className='iconForSkill' alt='email icon' />
              <div className='skillName'>CSS3</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <DiJavascript1 className='iconForSkill' alt='email icon' />
              <div className='skillName'>Javascript</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <GrReactjs className='iconForSkill' alt='email icon' />
              <div className='skillName'>React</div>
            </div>
          </div>
          <div className='row'>
            <div className='skillIcon col-1-of-4'>
              <FaAngular className='iconForSkill' alt='email icon' />
              <div className='skillName'>Angular</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <FaNode className='iconForSkill' alt='email icon' />
              <div className='skillName'>Node.js</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <SiRedux className='iconForSkill' alt='email icon' />
              <div className='skillName'>Redux</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <SiMongodb className='iconForSkill' alt='email icon' />
              <div className='skillName'>MongoDB</div>
            </div>
          </div>
          <div className='row'>
            <div className='skillIcon col-1-of-4'>
              <FaAws className='iconForSkill' alt='email icon' />
              <div className='skillName'>AWS</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <AiOutlineGithub className='iconForSkill' alt='email icon' />
              <div className='skillName'>Git</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <GrGraphQl className='iconForSkill' alt='email icon' />
              <div className='skillName'>GraphQL</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <FaSearchengin className='iconForSkill' alt='email icon' />
              <div className='skillName'>SEO</div>
            </div>
          </div>
          <div className='row'>
            <div className='skillIcon col-1-of-4'>
              <DiPostgresql className='iconForSkill' alt='email icon' />
              <div className='skillName'>Postgresql</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <SiTypescript className='iconForSkill' alt='email icon' />
              <div className='skillName'>TypeScript</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <DiSass className='iconForSkill' alt='email icon' />
              <div className='skillName'>Sass</div>
            </div>
            <div className='skillIcon col-1-of-4'>
              <DiScrum className='iconForSkill' alt='email icon' />
              <div className='skillName'>Scrum</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Skills;
