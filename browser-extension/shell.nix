{ pkgs ? import <nixpkgs> {
  config.allowUnfree = true;
} }:
  pkgs.mkShell {
    buildInputs = with pkgs.buildPackages; [
      nodejs_23
      firefox
      google-chrome
    ];
  }