# Transgender Infopunt Zorgkaart Overlay

This is the monorepo for the TIP Zorgkaart Overlay: a [webpage](webpage/) and [browser extension](browser-extension/) that overlay/display the positive & negative experiences of other trans people about [TIP](https://www.transgenderinfo.be/nl/zorgkaart)'s different care providers.

> Hopefully obvious note: the data provided here is by and for trans people *looking for a safe place for care*. Using this data for the sake of harassing care providers, no matter their rating, is counter-intuitive to the real long-term improvements needed for trans care. 

## What?
There are a few moving parts to this project:
- A webpage that...
    - allows people to share their experiences with their care providers
    - allows people to view aforementioned experiences
    - generates CSS & specific JSON files for the extension's live update
- A browser extension that...
    - Provides a visual overlay over the care providers on TIP's website
    - Adds the aforementioned ratings from other people to the detail page [(example detail page)](https://www.transgenderinfo.be/nl/zorgkaart/jac-oost-brabant)
