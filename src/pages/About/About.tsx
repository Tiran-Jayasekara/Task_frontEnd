import { TopBar } from "components";
import "./About.css";
import { useUserStore } from "states/userStore";
import { useTokenStore } from "states/tokenStore";

const About = () => {
  const user = useUserStore((state) => state.user);
  const token = useTokenStore((state) => state.token);

  console.log(user);
  console.log(token);

  return (
    <div>
      <TopBar />
      <div className="container">
        <span>
          In a quaint village nestled between rolling hills and lush forests,
          time seemed to stand still. The cobblestone streets echoed with the
          footsteps of generations past, and the air was filled with the sweet
          scent of blooming lavender. Each morning, the sun cast a golden glow
          over the red-tiled rooftops, and the gentle hum of bees could be heard
          as they flitted from flower to flower. The villagers, a close-knit
          community, greeted each other with warm smiles and shared stories of
          old at the bustling market square. Here, life was simple and
          slow-paced, a stark contrast to the frenetic energy of the distant
          city. Amidst the charming cottages and ancient oak trees, one could
          easily lose track of time, enveloped in the serene beauty and timeless
          tranquility of the village.
        </span>
      </div>
      <div className="body">
        <button className="btn">Read More</button>
      </div>
      <div className="grid_main">
        <div className="grid container">
          <span>
            In a quaint village nestled between rolling hills and lush forests,
            time seemed to stand still. The cobblestone streets echoed with the
            footsteps of generations past, and the air was filled with the sweet
            scent of blooming lavender. Each morning, the sun cast a golden glow
            over the red-tiled rooftops, and the gentle hum of bees could be
            heard as they flitted from flower to flower. The villagers, a
            close-knit community, greeted each other with warm smiles and shared
            stories of old at the bustling market square. Here, life was simple
            and slow-paced, a stark contrast to the frenetic energy of the
            distant city. Amidst the charming cottages and ancient oak trees,
            one could easily lose track of time, enveloped in the serene beauty
            and timeless tranquility of the village.
          </span>
        </div>
        <div className="grid container">
          <span>
            In a quaint village nestled between rolling hills and lush forests,
            time seemed to stand still. The cobblestone streets echoed with the
            footsteps of generations past, and the air was filled with the sweet
            scent of blooming lavender. Each morning, the sun cast a golden glow
            over the red-tiled rooftops, and the gentle hum of bees could be
            heard as they flitted from flower to flower. The villagers, a
            close-knit community, greeted each other with warm smiles and shared
            stories of old at the bustling market square. Here, life was simple
            and slow-paced, a stark contrast to the frenetic energy of the
            distant city. Amidst the charming cottages and ancient oak trees,
            one could easily lose track of time, enveloped in the serene beauty
            and timeless tranquility of the village.
          </span>
        </div>

        <div className="centered">
          <span>
            In a quaint village nestled between rolling hills and lush forests,
            time seemed to stand still. The cobblestone streets echoed with the
            footsteps of generations past, and the air was filled with the sweet
            scent of blooming lavender. Each morning, the sun cast a golden glow
            over the red-tiled rooftops, and the gentle hum of bees could be
            heard as they flitted from flower to flower. The villagers, a
            close-knit community, greeted each other with warm smiles and shared
            stories of old at the bustling market square. Here, life was simple
            and slow-paced, a stark contrast to the frenetic energy of the
            distant city. Amidst the charming cottages and ancient oak trees,
            one could easily lose track of time, enveloped in the serene beauty
            and timeless tranquility of the village.
          </span>
        </div>
      </div>
    </div>
  );
};
export { About };
