import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const IconSet = ({ imageUrl, styleClass }) => {
  const [svgCode, setSvgCode] = useState('');

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(imageUrl);
        const text = await response.text();
        setSvgCode(text);
      } catch (error) {
        console.error('Error fetching the SVG:', error);
      }
    };

    fetchSvg();
  }, [imageUrl]);

  return (
      <i className={`bi + ${styleClass}`}
        dangerouslySetInnerHTML={{ __html: svgCode }}
      />
  );
};

IconSet.propTypes = {
  imageUrl: PropTypes.string,
  styleClass: PropTypes.string,
};

export default IconSet;
