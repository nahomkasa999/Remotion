import { AbsoluteFill, Composition } from "remotion";
import Complied from "./complied";
import Boxes from "./boxes";

export const RemotionRoot = () => {
  return (
    <AbsoluteFill>
      <Composition
        id="comp"
        fps={30}
        height={1080}
        width={1920}
        durationInFrames={90}
        component={Complied}
      />
      
    </AbsoluteFill>
  );
};
