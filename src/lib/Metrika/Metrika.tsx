import Script from 'next/script';
import React, { FC } from 'react';

import type { MetrikaProps } from './Metrika.props';

/**
 * This component allows you to use Yandex.Metrika
 * in your Next projects.
 *
 * @param id
 * @constructor
 *
 * @example How to use
 * <Metrika id={123456789} />
 *
 * @see https://metrika.yandex.ru
 */
const Metrika: FC<MetrikaProps> = ({ id, clickMap = true, trackLinks = true, accurateTrackBounce = true }) => {
  return (
    <Script id={'metrika-counter'} strategy={'afterInteractive'}>
      {`   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();
           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
           ym(${id}, "init", {
                clickmap:${clickMap},
                trackLinks:${trackLinks},
                accurateTrackBounce:${accurateTrackBounce}
           });`}
    </Script>
  );
};

export default Metrika;
