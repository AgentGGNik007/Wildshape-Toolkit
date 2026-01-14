Hooks.once("ready", async () => {
  console.log("Wildshape Toolkit (5e) | ready");

  // Test: beasts.json aus dem Modul laden
  try {
    const response = await fetch(
      "modules/wildshape-toolkit-dnd5e/data/beasts.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const beasts = await response.json();
    console.log(
      `Wildshape Toolkit | beasts.json loaded (${beasts.length} entries)`
    );
  } catch (err) {
    console.warn(
      "Wildshape Toolkit | Could not load beasts.json",
      err
    );
  }
});
