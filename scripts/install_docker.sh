#!/bin/bash
# Adapted from https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04
# on 2022-09-31 by Cooper Walter

# NOTE: This script is intended to be fully executed *once* in the remote host for this project.

# check if Docker is already installed. If so, skip this script
missing=$((service docker status) 2>&1)
if [ !$missing ]
then
    echo "Docker is already installed. Skipping this script."
    exit 0
fi

# update existing list of pacakges
sudo apt update -y

# install a few prerequisite packages which let apt use packages over HTTPS
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

# add the GPG key for the official Docker repository
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# add Docker repo to APT sources
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# update existing list of packages again for the addition to be recognized
sudo apt update -y

# make sure about to install from the Docker repo instead of the default Ubuntu repo
apt-cache policy docker-ce

# install Docker
sudo apt install docker-ce -y