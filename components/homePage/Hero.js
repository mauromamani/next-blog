import Image from 'next/image';

import classes from './Hero.module.css';

const Hero = () => {
   return (
      <section className={classes.hero}>
         <div className={classes.image}>
            <Image
               src="/images/site/max.png"
               alt="An image showing name"
               width={300}
               height={300}
            />
         </div>
         <h1>Hi, i'm Name</h1>
         <p>I blog about web development - especially fronted frameworks.</p>
      </section>
   );
};

export default Hero;