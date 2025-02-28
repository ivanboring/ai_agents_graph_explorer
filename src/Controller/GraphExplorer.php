<?php

namespace Drupal\ai_agents_graph_explorer\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Controller for the graph explorer.
 */
class GraphExplorer extends ControllerBase {

  /**
   * The graph view.
   *
   * @return array
   *   The render array.
   */
  public function graphView() {
    return [
      '#markup' => 'hello',
    ];
  }

}
