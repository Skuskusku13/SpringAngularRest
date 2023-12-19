-- Base de données : `vehicules_rest`
--
CREATE DATABASE IF NOT EXISTS `vehicules_rest` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `vehicules_rest`;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
                         `iduser` int(11) NOT NULL,
                         `nom` varchar(50) NOT NULL,
                         `prenom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`iduser`, `nom`, `prenom`) VALUES
                                                    (1, 'Levy', 'Dan'),
                                                    (2, 'Francois', 'Joan'),
                                                    (7, 'morisette', 'juliette'),
                                                    (10, 'test', 'test'),
                                                    (11, 'zertyu', 'azertyfe\"zd'),
                                                    (13, 'Ionas', 'Rares');

-- --------------------------------------------------------

--
-- Structure de la table `vehicule`
--

CREATE TABLE `vehicule` (
                            `idvehicule` int(11) NOT NULL,
                            `marque` varchar(50) NOT NULL,
                            `immat` varchar(15) NOT NULL,
                            `mise_circulation` varchar(30) DEFAULT NULL,
                            `date_sortie` varchar(30) NOT NULL,
                            `iduser` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `vehicule`
--

INSERT INTO `vehicule` (`marque`, `immat`, `mise_circulation`, `date_sortie`, `iduser`) VALUES
                                                                                            ('Mercedes', '23-AZE-35', '2023-12-12', '2020-10-12', 1),
                                                                                            ('ertyui', 'rtyuiop', '2023-12-01', '2023-12-07', 10),
                                                                                            ('Audi', 'ER-876-NB', '2010-12-11', '2002-09-08', 13),
                                                                                            ('azertuio', 'sdfghuip', '275760-03-12', '45678-03-12', 13),
                                                                                            ('test', 'test', '2222-02-12', '1111-12-10', 11);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
    ADD PRIMARY KEY (`iduser`);

--
-- Index pour la table `vehicule`
--
ALTER TABLE `vehicule`
    ADD PRIMARY KEY (`idvehicule`),
  ADD KEY `iduser` (`iduser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
    MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `vehicule`
--
ALTER TABLE `vehicule`
    MODIFY `idvehicule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `vehicule`
--
ALTER TABLE `vehicule`
    ADD CONSTRAINT `vehicule_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `users` (`iduser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
