import React, { useEffect, createRef } from 'react'

declare global {
  const gobi: {
    Bubbles: {
      new (config: any): any;
    };
    discover: () => void;
  };
}

const bubbleDefaults = {
  animatedBubble: true,
  bubbleSize: 125,
  color: '#15D6EA',
  hideTitle: false,
  showPlayIcon: false,
  playIconUrl: '',
  autoStartWithSound: true,
  titleFontColor: '#000',
  align: 'center',
  autoSegue: false,
  fullScreenPlayer: false,
  noShade: false,
  disableShadowDom: true,
};
type BubbleDefaults = typeof bubbleDefaults;

type Props = Partial<BubbleDefaults> & { stories: string[] };

const GobiReact = (props: Props) => {
  const ref = createRef<HTMLDivElement>();

  const createEmbed = () => {
    if (!ref.current) {
      return;
    }
    // discover() doesn't work with react elements, so create a raw HTMLElement
    ref.current.innerHTML = `<div class="gobi-stories"></div>`;

    const config = {
      ...bubbleDefaults,
      ...props
    };

    new gobi.Bubbles({
      ...config,
      playerOptions: {
        autoStartWithSound: config.autoStartWithSound,
      },
      container: ref.current.firstElementChild,
      stories: props.stories.map((viewKey) => ({ id: viewKey })),
      bubbleSize: `${props.bubbleSize}px`,
    });
  };

  useEffect(() => {
    if ("undefined" !== typeof gobi) {
      createEmbed();
      return;
    }

    const script = document.createElement("script");
    script.addEventListener("load", createEmbed);
    script.setAttribute("src", 'https://unpkg.com/@gobistories/gobi-web-integration@^6');
    document.head.appendChild(script);
  }, [])

  return <div ref={ref} />
}

export { GobiReact }
