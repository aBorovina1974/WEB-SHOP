import React, { useEffect, useState, Component, useRef } from "react";
import PropTypes from "prop-types";
import Spinner from "./components/Spinner/Spinner";

const AsyncImport = (props) => {
  const [component, setComponent] = useState(null);
  AsyncImport.propTypes = {
    load: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  const toggleFoucClass = () => {
    const root = document.getElementById("root");
    root.classList.contains("fouc")
      ? root.classList.remove("fouc")
      : root.classList.add("fouc");
  };

  const useComponentWillMount = (callback) => {
    const mounted = useRef(false);
    if (!mounted) {
      callback();
    }

    useEffect(() => {
      mounted.current = true;
    }, []);
  };

  useComponentWillMount(toggleFoucClass);

  useEffect(() => {
    props.load().then((component) => {
      setTimeout(() => {
        toggleFoucClass();
      }, 0);
      setComponent(component.default);
    });
  }, []);

  return props.children(component);
};

const asyncRoute = (importFunct) => (props) =>
  (
    <AsyncImport load={importFunct}>
      {(Component) => {
        return Component === null ? <Spinner /> : <Component {...props} />;
      }}
    </AsyncImport>
  );

export default asyncRoute;
