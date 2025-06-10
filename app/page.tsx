import CometGrid from "./_components/common/CometGrid";
import GlowBlob from "./_components/common/GlowBlob";
import Main from "./_components/hero/Main/Main";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Main />
      <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      <CometGrid />
      <GlowBlob color="purple" size="large" top="114px" left="138px" />
      <GlowBlob color="cyan" size="small" top="326px" left="281px" />
    </div>
  );
}
