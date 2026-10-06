import type { ReactNode } from "react";

const links = {
  tuningForks: "https://tunningforks.co",
  bella: "https://t.me/useBellaBot",
  oneramp: "https://oneramp.io",
  vifiLabs: "https://vifilabs.xyz",
  starkware: "https://starkware.co",
  nethermind: "https://www.nethermind.io/",
  medium: "https://medium.com/@eliashezron",
  x: "https://x.com/0xeliashezron",
  github: "https://github.com/eliashezron",
  blog: "#",
  telegram: "https://t.me/useBellaBot",
  email: "opioeliashezron@gmail.com",
  linkedin: "https://www.linkedin.com/in/eliashezron"
} as const;

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Elias Hezron Opio</h1>

      <p className="muted">
        founder, <Ext href={links.tuningForks}>tuning forks</Ext> · product
        &amp; growth
      </p>

      <p>
        i&apos;m building <Ext href={links.bella}>bella</Ext> at tuning forks: a
        task assistant that lives in your whatsapp. send her a text or a voice
        note in your own language, and she manages your email and calendar, sets
        reminders, and finds you the best deals on flights and insurance. she
        only pays for anything once you approve it.
      </p>

      <p>
        why: billions of people run their lives and businesses through whatsapp,
        in the languages they grew up speaking. ai agents should work for all of
        them, not just a few.
      </p>

      <p>
        i founded <Ext href={links.oneramp}>oneramp</Ext>, a fiat-to-stablecoin
        on/off-ramp that reached 25k+ users and $1.2m+ in volume across 7
        countries before it was acquired by{" "}
        <Ext href={links.vifiLabs}>vifi labs</Ext>
      </p>

      <p>
        previously <Ext href={links.starkware}>starkware</Ext> (africa ventures
        fund), <Ext href={links.vifiLabs}>vifi labs</Ext>,{" "}
        <Ext href={links.oneramp}>oneramp</Ext>,{" "}
        <Ext href={links.nethermind}>nethermind</Ext>.
      </p>

      <p>
        i write on <Ext href={links.medium}>medium</Ext>, post on{" "}
        <Ext href={links.x}>x</Ext>, and push code on{" "}
        <Ext href={links.github}>github</Ext>.
      </p>
      
      <p>
        contact: <Ext href={links.linkedin}>linkedin</Ext>,{" "}
        <a href={links.email}>email</a>
      </p>
    </main>
  );
}
