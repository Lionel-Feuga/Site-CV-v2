import Matter from "matter-js";

export const useStopMotion = () => {
  const engine = Matter.Engine.create();
  const runner = Matter.Runner.create();
  const world = engine.world;

  engine.gravity.y = 0; // Désactiver la gravité

  const PIXEL_SPEED = 130;

  const initializeMatter = (logos) => {
    const basket = document.querySelector(".basket");
    const rect = basket.getBoundingClientRect();

    // Ajouter les murs du panier
    const walls = [
      Matter.Bodies.rectangle(rect.width / 2, 0, rect.width, 10, {
        isStatic: true,
        restitution: 1,
      }),
      Matter.Bodies.rectangle(rect.width / 2, rect.height, rect.width, 10, {
        isStatic: true,
        restitution: 1,
      }),
      Matter.Bodies.rectangle(0, rect.height / 2, 10, rect.height, {
        isStatic: true,
        restitution: 1,
      }),
      Matter.Bodies.rectangle(rect.width, rect.height / 2, 10, rect.height, {
        isStatic: true,
        restitution: 1,
      }),
    ];
    Matter.World.add(world, walls);

    // Ajouter les logos
    logos.forEach((logo) => {
      const logoWidth = logo.offsetWidth;
      const logoBody = Matter.Bodies.circle(
        Math.random() * rect.width,
        Math.random() * rect.height,
        logoWidth / 2,
        {
          restitution: 1,
          friction: 0,
          frictionAir: 0,
        }
      );

      Matter.Body.setVelocity(logoBody, {
        x: (Math.random() * 2 - 1) * PIXEL_SPEED / 190,
        y: (Math.random() * 2 - 1) * PIXEL_SPEED / 190,
      });

      Matter.World.add(world, logoBody);
      logo.dataset.bodyId = logoBody.id; // Associer le body au logo
    });

    Matter.Runner.run(runner, engine);
  };

  const maintainConstantVelocity = (logos) => {
    logos.forEach((logo) => {
      const bodyId = logo.dataset.bodyId;
      const body = world.bodies.find((b) => b.id === parseInt(bodyId));

      if (body) {
        const velocity = Math.sqrt(body.velocity.x ** 2 + body.velocity.y ** 2);
        if (velocity < PIXEL_SPEED / 60) {
          Matter.Body.setVelocity(body, {
            x: (body.velocity.x / velocity) * PIXEL_SPEED / 60,
            y: (body.velocity.y / velocity) * PIXEL_SPEED / 60,
          });
        }
      }
    });
  };

  const startLogoMovement = (logos) => {
    const render = () => {
      maintainConstantVelocity(logos);

      logos.forEach((logo) => {
        const bodyId = logo.dataset.bodyId;
        const body = world.bodies.find((b) => b.id === parseInt(bodyId));

        if (body) {
          const logoWidth = logo.offsetWidth;
          const logoHeight = logo.offsetHeight;

          logo.style.transform = `translate(${body.position.x - logoWidth / 2}px, ${
            body.position.y - logoHeight / 2
          }px)`;
        }
      });

      requestAnimationFrame(render);
    };

    render();
  };

  const toggleStopMotion = (isStopped, logos) => {
    const logoBodies = logos.map((logo) =>
      Matter.Composite.allBodies(engine.world).find(
        (body) => body.id === parseInt(logo.dataset.bodyId)
      )
    );

    if (isStopped) {
      logoBodies.forEach((body) => {
        if (body) {
          Matter.Body.setVelocity(body, { x: 0, y: 0 }); // Arrêter les bodies
          Matter.Body.setStatic(body, true); // Immobiliser les bodies
        }
      });
    } else {
      logoBodies.forEach((body) => {
        if (body) {
          Matter.Body.setStatic(body, false); // Débloquer les bodies
          Matter.Body.setVelocity(body, {
            x: (Math.random() * 2 - 1) * PIXEL_SPEED / 60,
            y: (Math.random() * 2 - 1) * PIXEL_SPEED / 60,
          });
        }
      });
    }
  };

  return { initializeMatter, startLogoMovement, toggleStopMotion };
};
